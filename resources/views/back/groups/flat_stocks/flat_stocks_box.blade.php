<div class="box">
    <div class="box-header with-border">
        <h3 class="box-title">Акция {{$item->sorter_field}}</h3>
        <button type="submit" class="btn btn-primary pull-right remove-flat-item" data-id="{{$item->id_field}}"
                data-block="flat_stocks">Удалить</button>
    </div>
    <div class="box-body">

        <div class="form-group">
            <label>Название прописью</label>
            <input class="form-control string"
                   type="text" placeholder=""
                   value="{{$item->name_in_words}}"
                   data-name="name_in_words"
                   data-type="string"
                   data-block="flat_stocks"
                   data-id="{{$item->id_field}}">
        </div>

        <div class="form-group">
            <label>Название с цифрой</label>
            <input class="form-control string"
                   type="text" placeholder=""
                   value="{{$item->name_with_digit}}"
                   data-name="name_with_digit"
                   data-type="string"
                   data-block="flat_stocks"
                   data-id="{{$item->id_field}}">
        </div>

        <div class="form-group">
            <label>Акционная стоимость 1 м² площади квартиры</label>
            <input class="form-control int"
                   type="number" placeholder=""
                   value="{{$item->price}}"
                   data-name="price"
                   data-type="int"
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
    </div>
</div>
