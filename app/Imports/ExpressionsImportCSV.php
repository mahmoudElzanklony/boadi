<?php

namespace App\Imports;


use App\Models\definisions;
use Illuminate\Database\Eloquent\Model;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\WithValidation;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class ExpressionsImportCSV implements ToModel, WithValidation, WithHeadingRow
{
    use Importable;
    /**
     * @param array $row
     *
     * @return \Illuminate\Database\Eloquent\Model|null
     */

    public function model(array $row)
    {
        // php artisan make:import countriesImportCSV --model=countries to make this class
        // create new quotation bill

        return new definisions([
            //
            'term_in_arabic'=>$row['term_in_arabic'],
            'term_in_english'=>$row['term_in_english'],
         //   'tags'=>$row['tags'],
            'expression'=>$row['expression'],
        ]);
    }


    public function rules(): array
    {
        return [
            'term_in_arabic' => 'required',
            'term_in_english' => 'required',
            'expression' => 'required',
        //    'tags' => 'nullable',
        ];
    }

    public function customValidationMessages()
    {
        return [
            'term_in_arabic.required' => trans('keywords.term_in_arabic').' '.trans('keywords.required'),
            'term_in_english.required' => trans('keywords.term_in_english').' '.trans('keywords.required'),
            'expression.required' => trans('keywords.expression').' '.trans('keywords.required'),
        ];
    }


}
