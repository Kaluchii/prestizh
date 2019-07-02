<div class="box">
    <div class="box-header with-border">
        <h3 class="box-title">Квартира {{$item->sorter_field}}</h3>
        <button type="submit" class="btn btn-primary pull-right remove-flat-item" data-id="{{$item->id_field}}"
                data-block="flat_stocks">Удалить</button>
    </div>
    <div class="box-body">

        <div class="form-group">
            <label>Размер квартиры</label>
            <input class="form-control float"
                   type="number" placeholder=""
                   value="{{$item->area_field}}"
                   data-name="area"
                   data-type="float"
                   data-block="flat_stocks"
                   data-id="{{$item->id_field}}">
        </div>

        <div class="form-group">
            <label>
                <input type="checkbox" class="minimal bool"
                       data-name="actual"
                       data-type="bool"
                       data-block="flat_stocks"
                       data-id="{{$item->id_field}}"
                       @if($item->actual) checked @endif>
                Активная акция
            </label>
        </div>

        <div class="form-group">
            <label>Стоимость 1 м² площади квартиры в долларах</label>
            <input class="form-control float"
                   type="number" placeholder=""
                   value="{{$item->meter_cost_field}}"
                   data-name="meter_cost"
                   data-type="float"
                   data-block="flat_stocks"
                   data-id="{{$item->id_field}}">
        </div>

        <div class="form-group">
            <label>Размер скидки при 100%-ой оплате</label>
            <input class="form-control float"
                   type="number" placeholder=""
                   value="{{$item->discount_field}}"
                   data-name="discount"
                   data-type="float"
                   data-block="flat_stocks"
                   data-id="{{$item->id_field}}">
        </div>

        <div class="form-group">
            <label>Стоимость при 100%-ой оплате в тг (включается при значении > 0)</label>
            <input class="form-control float"
                   type="number" placeholder=""
                   value="{{$item->stock_price_field}}"
                   data-name="stock_price"
                   data-type="float"
                   data-block="flat_stocks"
                   data-id="{{$item->id_field}}">
        </div>

        <div class="form-group">
            <label>Блок</label>
            <input class="form-control string"
                   type="text" placeholder=""
                   value="{{$item->block_field}}"
                   data-name="block"
                   data-type="string"
                   data-block="flat_stocks"
                   data-id="{{$item->id_field}}">
        </div>

        <div class="form-group">
            <label>Этаж</label>
            <input class="form-control string"
                   type="text" placeholder=""
                   value="{{$item->floor_field}}"
                   data-name="floor"
                   data-type="string"
                   data-block="flat_stocks"
                   data-id="{{$item->id_field}}">
        </div>
    </div>
</div>
