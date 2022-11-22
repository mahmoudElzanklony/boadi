<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class contactFormRequest extends FormRequest
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
            'email'=>'required',
            'phone'=>'nullable',
            'reason'=>'required',
            'message'=>'required',
        ];
    }

    public function attributes()
    {
        return [
            'name'=>trans('keywords.name'),
            'email'=>trans('keywords.email'),
            'reason'=>trans('keywords.reason'),
            'message'=>trans('keywords.message'),
        ];
    }
}
