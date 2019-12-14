@extends('back.layout')
@section('content')

@include('back.content-top', ['title' => 'Коммерция'])

<div class="box box box-info">
    <div class="box-header with-border">
        <h3 class="box-title">Поля для редактирования</h3>
    </div>
    <div class="box-body">
        <div class="form-group">
            <label>Заголовок</label>
            <input class="form-control string"
                   type="text" placeholder=""
                   value="{{$commerce->block_title_field}}"
                   data-name="block_title"
                   data-type="string"
                   data-block="commerce"
                   data-id="0">
        </div>
    </div>
</div>

<div class="box box-info group-item-widget"
     data-block="commerce_layout">
    <div class="box-header with-border">
        <h3 class="box-title">Коммерческие помещения</h3>
        <button type="submit" data-parent="0" class="btn btn-primary pull-right add-flat-item">Добавить</button>
    </div>
    <div class="box-body">

        <div class="groupflat-widget group-item-wrap">
            @foreach($commerce->commerce_layout_group as $item)
                @include('back.groups.commerce_layout.commerce_layout_box', ['item' => $item])
            @endforeach
        </div>
    </div>
</div>

@endsection