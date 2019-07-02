@extends('back.layout')
@section('content')
    @include('back.content-top', ['title' => 'Титульный блок'])
    <div class="box box box-info">
        <div class="box-header with-border">
            <h3 class="box-title">Поля для редактирования</h3>
        </div>
        <div class="box-body">
            <div class="form-group">
                <label>Заголовок</label>
                <input class="form-control string"
                       type="text" placeholder=""
                       value="{{$main_block->block_title_field}}"
                       data-name="block_title"
                       data-type="string"
                       data-block="main_block"
                       data-id="0">
            </div>
            <div class="form-group">
                <label>Адрес</label>
                <input class="form-control string"
                       type="text" placeholder=""
                       value="{{$main_block->address_field}}"
                       data-name="address"
                       data-type="string"
                       data-block="main_block"
                       data-id="0">
            </div>
            <div class="form-group">
                <label>Цена 1 кв.м по акции</label>
                <input class="form-control string"
                       type="text" placeholder=""
                       value="{{$main_block->price_field}}"
                       data-name="price"
                       data-type="string"
                       data-block="main_block"
                       data-id="0">
            </div>
            <div class="form-group">
                <label>Количество оставшихся квартир</label>
                <input class="form-control string"
                       type="text" placeholder=""
                       value="{{$main_block->apartments_left}}"
                       data-name="apartments_left"
                       data-type="string"
                       data-block="main_block"
                       data-id="0">
            </div>

            <div class="box box-info group-item-widget"
                 data-block="flat_stocks">
                <div class="box-header with-border">
                    <h3 class="box-title"> Акции </h3>
                    <button type="submit" data-parent="0" class="btn btn-primary pull-right add-flat-item">Добавить</button>
                </div>
                <div class="box-body">

                    <div class="form-group">
                        <label>
                            <input type="checkbox" class="minimal bool"
                                   data-name="parking_actual"
                                   data-type="bool"
                                   data-block="main_block"
                                   data-id="0"
                                   @if($main_block->parking_actual) checked @endif>
                            Акция "Паркинг в подарок" активна
                        </label>
                    </div>

                    <div class="groupflat-widget group-item-wrap">
                        @foreach($main_block->flat_stocks_group as $flat_stocks_item)
                            @include('back.groups.flat_stocks.flat_stocks_box', ['item' => $flat_stocks_item])
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection