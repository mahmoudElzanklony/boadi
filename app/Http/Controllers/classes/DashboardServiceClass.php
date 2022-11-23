<?php

namespace App\Http\Controllers\classes;

use App\Http\Controllers\Controller;
use App\Http\Requests\adFormRequest;
use App\Http\Requests\brandsFormRequest;
use App\Http\Requests\categoriesFormRequest;
use App\Http\Requests\currenciesFormRequest;
use App\Http\Requests\definitionsFormRequest;
use App\Http\Requests\mapFormRequest;
use App\Http\Requests\packagesFormRequest;
use App\Http\Requests\questionsFormRequest;
use App\Http\Requests\subCategoriesFormRequest;
use App\Http\Requests\supportFormRequest;
use App\Http\Requests\uploadfilesFormRequest;
use App\Http\Requests\usersFormRequest;
use App\Http\traits\messages;
use App\Imports\ExpressionsImportCSV;
use App\Models\ads;
use App\Models\advertising_points_price;
use App\Models\answers;
use App\Models\areas;
use App\Models\brands;
use App\Models\categories;
use App\Models\categories_questions;
use App\Models\cities;
use App\Models\countries;
use App\Models\currencies;
use App\Models\definisions;
use App\Models\definitions_tags;
use App\Models\governments;
use App\Models\listing_photos;
use App\Models\listings_info;
use App\Models\map_images;
use App\Models\packages;
use App\Models\packages_prices_places;
use App\Models\questions;
use App\Models\quotation_orders;
use App\Models\support;
use App\Models\Tags;
use App\Models\User;
use App\Services\listings\average_price_at_area;
use App\Services\listings\get_pointsprice_of_place;
use App\Services\mail\send_email;
use App\Services\map\get_location_where;
use App\Services\notifications\create_notification;
use App\Services\statistics\filter_statistics_admin;
use Illuminate\Http\Request;
use App\Http\traits\upload_image;
use Maatwebsite\Excel\Facades\Excel;

class DashboardServiceClass extends Controller
{
    //
    use upload_image;

    public function save_definition(definitionsFormRequest $request){
        $validated = $request->validated();

        $item = definisions::query()->with('tags')->updateOrCreate([
            'id'=>request()->has('id') ? request('id'):null
        ],$validated);
        definitions_tags::query()->where('definition_id','=',$item['id'])->delete();
        if(request()->has('tags') && sizeof(request('tags')) > 0 ) {
            foreach (request('tags') as $tag) {
               $tag = json_decode($tag,true);
                $auto_complete_tag = Tags::query()->updateOrCreate([
                    'id'=>is_numeric($tag['key']) ? $tag['key'] : null
                ],[
                    'name'=>$tag['value']
                ]);
                definitions_tags::query()->create([
                    'definition_id'=>$item['id'],
                    'tag_id'=>$auto_complete_tag['id'],
                ]);
            }
        }

        return messages::success_output(trans('messages.saved_successfully'),$item,request()->has('id') ? 'update':'insert');
    }

    // save question


    public function save_files(){
        $file = request()->file('file');
        $exten = $file->getClientOriginalExtension();
        $file_name = time().rand(0,9999999999999). '_excel.' .$exten;
        ini_set ('max_execution_time', 3600);
        ini_set ('memory_limit', '2048M');
        try {
            // create new quotation bill
            Excel::queueImport(new ExpressionsImportCSV,
                request()->file('file')
            );
        } catch (\Maatwebsite\Excel\Validators\ValidationException $e) {
            $failures = $e->failures();
            return messages::error_output($failures[0]->errors());

        }
        return messages::success_output([trans('messages.saved_successfully')]);
    }


    public function save_settings(usersFormRequest $request){
        $validated = $request->validated();
        if(request()->has('password') && request()->filled('password')){
            $validated['password'] = bcrypt(request('password'));
        }
        $user = User::query()->where('id','=',auth()->id())->update($validated);
        return messages::success_output(trans('messages.saved_successfully'));
    }


    public function save_ad(adFormRequest $request){
        $validated = $request->validated();
        if(request()->hasFile('image')){
            $image = $this->upload(request('image'),'ads');
            $validated['image'] = $image;
        }else if(!(request()->has('id'))){
            $validated['image'] = 'default.png';
        }
        $item = ads::query()->updateOrCreate([
            'id'=>request()->has('id') ? request('id'):null
        ],$validated);

        return messages::success_output(trans('messages.saved_successfully'),$item,request()->has('id') ? 'update':'insert');
    }

}
