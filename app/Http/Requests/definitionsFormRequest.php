<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class definitionsFormRequest extends FormRequest
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
            'term_in_arabic'=>'required|max:191',
            'term_in_english'=>'required|max:191',
            'expression'=>'required|max:191',
        ];
    }

    public function attributes()
    {
        return [
            'term_in_arabic'=>trans('keywords.term_in_arabic'),
            'term_in_english'=>trans('keywords.term_in_english'),
            'tags'=>trans('keywords.tags'),
            'expression'=>trans('keywords.expression'),
        ];
    }
}
