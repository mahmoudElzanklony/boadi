<?php

namespace App\Http\Controllers\classes\auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\usersFormRequest;
use App\Http\traits\messages;
use App\Models\roles;
use App\Models\User;
use App\Services\auth\register_service;
use Illuminate\Http\Request;
use App\Http\traits\upload_image;

class AuthServicesClass extends Controller
{
    use messages , upload_image;
    //
    // post


    public function register_post(usersFormRequest $request){
        $role = roles::query()->first();
        $personal_info = $request->validated();
        $personal_info['serial'] = rand(0,9999999999999999);
        $personal_info['password'] = bcrypt($personal_info['password']);
        $personal_info['image'] = 'default.png';
        $personal_info['approved'] = 0;
        $personal_info['role_id'] = $role->id;
        $user = User::query()->create($personal_info);
        return messages::success_output(trans('messages.registered_user'),'','/login');

    }


    // post
    public function login_post(usersFormRequest $request){
        if(auth()->attempt($request->validated())){
            $role_name = roles::query()->find(auth()->user()->role_id)->name;
            session()->put('type',$role_name);
            if($role_name == 'admin' ){
                $url = '/dashboard/uploadfile';
            }else{
                $url = '/';
            }
            return messages::success_output(['message'=>'','user'=>auth()->user()]
                ,'', $url);
        }
        return messages::error_output(['message'=>trans('messages.unauthenticated_err_form')]);
    }

    public function logout(){
        session()->forget('type');
        auth()->logout();
        return back();
    }
}
