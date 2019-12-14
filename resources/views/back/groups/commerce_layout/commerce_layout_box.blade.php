<div class="box">
    <div class="box-header with-border">
        <h3 class="box-title">Помещение {{$item->sorter_field}}</h3>
        <button type="submit" class="btn btn-primary pull-right remove-flat-item" data-id="{{$item->id_field}}"
                data-block="commerce_layout">Удалить</button>
    </div>
    <div class="box-body">

        <div class="form-group">
            <label>Название</label>
            <input class="form-control string"
                   type="text" placeholder=""
                   value="{{$item->layout_name_field}}"
                   data-name="layout_name"
                   data-type="string"
                   data-block="commerce_layout"
                   data-id="{{$item->id_field}}">
        </div>

        <div class="form-group">
            <label>Этаж</label>
            <input class="form-control string"
                   type="text" placeholder=""
                   value="{{$item->floor_field}}"
                   data-name="floor"
                   data-type="string"
                   data-block="commerce_layout"
                   data-id="{{$item->id_field}}">
        </div>

        <div class="form-group">
            <label>Размер помещения</label>
            <input class="form-control float"
                   type="number" placeholder=""
                   value="{{$item->area_field}}"
                   data-name="area"
                   data-type="float"
                   data-block="commerce_layout"
                   data-id="{{$item->id_field}}">
        </div>

        <div class="form-group">
            <label>
                <input type="checkbox" class="minimal bool"
                       data-name="labeled"
                       data-type="bool"
                       data-block="commerce_layout"
                       data-id="{{$item->id_field}}"
                       @if($item->labeled) checked @endif>
                Выделить кнопку
            </label>
        </div>

        <div class="form-group">
            <label>Цена за 1 м² в тенге</label>
            <input class="form-control float"
                   type="number" placeholder=""
                   value="{{$item->stock_price_field}}"
                   data-name="stock_price"
                   data-type="float"
                   data-block="commerce_layout"
                   data-id="{{$item->id_field}}">
        </div>

        <div class="form-group">
            <label>Размер скидки</label>
            <input class="form-control float"
                   type="number" placeholder=""
                   value="{{$item->discount_field}}"
                   data-name="discount"
                   data-type="float"
                   data-block="commerce_layout"
                   data-id="{{$item->id_field}}">
        </div>

        <div class="form-group">
            <label>Изображение</label>
            <div class="dropzone">
                <div class="file-input">
                    <div class="file-preview">
                        <div class="input-group file-caption-main">

                            <div class="file-preview-frame">
                                <div class="kv-file-content">
                                    <img src="{{$item->layout_scheme_field->link}}?{{$item->layout_scheme_field->cache_index}}" class="kv-preview-data file-preview-image"
                                         title="{{$item->layout_scheme_field->alt}}" alt="{{$item->layout_scheme_field->alt}}">
                                </div>
                                <div class="file-thumbnail-footer">
                                    <div class="file-footer-caption"
                                         title="{{$item->layout_scheme_field->alt}}">{{$item->layout_scheme_field->name_field}}
                                        <br> </div>
                                    <div class="file-actions">
                                        <input type="text" class="form-control alt-text" data-block="commerce_layout"
                                               data-type="images" data-id="{{$item->id_field}}" data-name="alt"
                                               value="{{$item->layout_scheme_field->alt}}">
                                        <div class="clearfix"></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="input-group-btn">
                <button type="button" tabindex="500" title="Clear selected files"
                        class="btn btn-default fileinput-remove fileinput-remove-button"><i
                            class="glyphicon glyphicon-trash"></i> <span class="hidden-xs">Очистить</span></button>
                <button type="button" tabindex="500" title="Abort ongoing upload"
                        class="btn btn-default hide fileinput-cancel fileinput-cancel-button"><i
                            class="glyphicon glyphicon-ban-circle"></i> <span class="hidden-xs">Cancel</span></button>
                <div tabindex="500" class="btn btn-primary btn-file">
                    <i class="glyphicon glyphicon-folder-open"></i>&nbsp;
                    <span class="hidden-xs">Выбрать изображение …</span>
                    <input type="file" class="form-control file"
                           data-block="commerce_layout"
                           data-name="layout_scheme"
                           data-type="image"
                           data-id="{{$item->id_field}}">
                </div>
            </div>
        </div>

        <div class="form-group">
            <label>Позиция</label>
            <input type="number" class="form-control string"
                   data-id="{{$item->id_field}}"
                   data-block="commerce_layout"
                   data-name="sorter"
                   value="{{$item->sorter_field}}">
        </div>
    </div>
</div>
