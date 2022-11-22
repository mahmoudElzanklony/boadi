<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class adFormRequest extends FormRequest
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
    public function rules()
    {
        return [
            'name'=>'required',
            'link'=>'required',
            'image'=>'nullable',
            'is_visible'=>'required',
        ];
    }

    public function attributes()
    {
        return [
           'name'=>trans('keywords.name'),
           'image'=>trans('keywords.image'),
           'link'=>trans('keywords.link'),
           'is_visible'=>trans('keywords.is_visible'),
        ];
    }
}
