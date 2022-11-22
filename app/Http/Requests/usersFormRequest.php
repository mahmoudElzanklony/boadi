<?php

namespace App\Http\Requests;

use App\Rules\matchOldPasssword;
use Illuminate\Foundation\Http\FormRequest;

class usersFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */

    public function login(){
        return [
            'email'=>'required|email|max:191',
            'password'=>'required|min:6|max:191',
        ];
    }


    public function register(){
        return [
            //
            'username'=>'required|max:191',
            'email'=>'required|email|max:191|unique:users,email',
            'password'=>'required|min:7|max:191',
            'phone'=>'required|min:7',
        ];
    }

    public function update_admin(){
        return [
            //
            'username'=>'required|max:191',
            'email'=>'required|email|max:191|unique:users,email,'.request('id'),
            'password'=>'nullable|min:7|max:191',
            'phone'=>'required|min:7',
        ];
    }



    public function rules()
    {
        if(str_contains($this->getRequestUri(),'/login')){
            return $this->login();
        }else if(str_contains($this->getRequestUri() , '/register')){
            return $this->register();
        }else{
            return $this->update_admin();
        }
    }

    public function attributes()
    {
        return [
            'username'=>trans('keywords.username'),
            'full_name'=>trans('keywords.full_name'),
            'email'=>trans('keywords.email'),
            'password'=>trans('keywords.password'),
            'current_password'=>trans('keywords.current_password'),
            'image'=>trans('keywords.image'),
            'block'=>trans('keywords.block'),
            'role_id'=>trans('keywords.user_type'),
            'account_number'=>trans('keywords.account_number'),
            'bank_licence'=>trans('keywords.bank_info_document'),
            'trade_licence'=>trans('keywords.trade_licence'),
            'brands'=>trans('keywords.brands'),
        ];
    }

    public function messages()
    {
        return [

        ];
    }
}
