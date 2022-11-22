<?php


namespace App\Keywords;


class WelcomeKeyWords
{
    public static function get_key_words()
    {
        return [
          'search'=>trans('keywords.search'),
          'know_more'=>trans('keywords.know_more'),
          'website_name'=>trans('keywords.website_name'),
          'website_word'=>trans('keywords.website_word'),
          'search_about_any_thing_you_want'=>trans('keywords.search_about_any_thing_you_want'),
          'your_feedback'=>trans('keywords.your_feedback'),
          'dictionary_services'=>trans('keywords.dictionary_services'),
          'content_service_word'=>trans('keywords.content_service_word'),
          'content_service'=>trans('keywords.content_service'),
          'support_service_word'=>trans('keywords.support_service_word'),
          'support_service'=>trans('keywords.support_service'),
          'email_message_word'=>trans('keywords.email_message_word'),
          'email_message_service'=>trans('keywords.email_message_service'),
          'mobile_experience'=>trans('keywords.mobile_experience'),
          'mobile_experience_info'=>trans('keywords.mobile_experience_info'),

          'dictionary_features'=>trans('keywords.dictionary_features'),
          'fast_search'=>trans('keywords.fast_search'),
          'fast_search_word'=>trans('keywords.fast_search_word'),
          'ads_search'=>trans('keywords.ads_search'),
          'ads_search_word'=>trans('keywords.ads_search_word'),
          'download_terms_that_are_important_to_you'=>trans('keywords.download_terms_that_are_important_to_you'),
          'download_terms_that_are_important_to_you_word'=>trans('keywords.download_terms_that_are_important_to_you_word'),
          'send_message'=>trans('keywords.send_message'),
          'call_us_by_phone'=>trans('keywords.call_us_by_phone'),
          'customer_support'=>trans('keywords.customer_support'),
        ];
    }
}
