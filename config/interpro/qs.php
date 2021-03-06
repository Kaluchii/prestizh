<?php

return [

    'main_block' => [
        'string' => ['block_title', 'price', 'price_up', 'address', 'apartments_left'],
        'bool' => ['parking_actual'],
        'groups' => [
            'flat_stocks' => [
                'string' => ['name_with_digit', 'name_in_words', 'discount_condition'],
                'int' => ['price'],
                'bool' => ['actual'],
            ]
        ]
    ],

    'about' => [
        'string' => ['block_title', 'title0', 'title1', 'title2', 'title3', 'title4', 'title5', 'title6', 'title7'],
        'text' => ['text', 'text0', 'text1', 'text2', 'text3', 'text4', 'text5', 'text6', 'text7'],
        'image' => ['image0', 'image1', 'image2', 'image3', 'image4', 'image5', 'image6', 'image7']
    ],

    'gallery' => [
        'string' => ['block_title'],
        'imageset' => ['slider' => 'slide'],
    ],

    'flats' => [
        'string' => ['block_title'],
        'text' => ['text'],
        'groups' => [
            'dom_flat' => [
                'string' => ['dom_flat_name', 'singularly']
            ],
            'layout' => [
                'image' => ['layout_scheme'],
                'string' => ['block', 'floor'],
                'float' => ['area', 'meter_cost', 'stock_price', 'discount'],
                'bool' => ['labeled'],
                'dom_flat' => ['superior']
            ]
        ]
    ],

    'commerce' => [
        'string' => ['block_title'],
        'groups' => [
            'commerce_layout' => [
                'image' => ['layout_scheme'],
                'string' => ['layout_name', 'floor'],
                'float' => ['area', 'stock_price', 'discount'],
                'bool' => ['labeled'],
            ]
        ]
    ],

    'stages' => [
        'string' => ['block_title'],
        'text' => ['text'],
        'int' => ['percent'],
        'groups' => [
            'dom_stages' => [
                'string' => ['dom_stages_name'],
                'text' => ['text']
            ],
            'stage_images' => [
                'image' => ['stage_photo'],
                'dom_stages' => ['superior']
            ]
        ]
    ],

    'contacts' => [
        'string' => ['block_title', 'phone', 'mail', 'address'],
        'text' => ['text']
     ],

    'prices' => [
        'float' => ['dollar']
    ],

    'scripts' => [
        'text' => ['before_close', 'after_open', 'before_head_close'],
    ],


];
