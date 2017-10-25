@extends('back.layout')
@section('content')
    @include('back.content-top', ['title' => 'О комплексе'])
    <div class="box box box-info">
        <div class="box-header with-border">
            <h3 class="box-title">Поля для редактирования</h3>
        </div>
        <div class="box-body">
            <div class="form-group">
                <label>Заголовок</label>
                <input class="form-control string"
                       type="text" placeholder=""
                       value="{{$about->block_title_field}}"
                       data-name="block_title"
                       data-type="string"
                       data-block="about"
                       data-id="0">
            </div>
            <div class="form-group">
                <label>Текст под заголовком</label>
                <textarea class="form-control text"
                          data-name="text" data-reg="true"
                          data-type="text"
                          data-block="about"
                          data-id="0">{{$about->text_field}}</textarea>
            </div>
        </div>
    </div>

    <div class="box box-info">
        <div class="box-header with-border">
            <h3 class="box-title"> Список </h3>
        </div>
        <div class="box-body">
            <div class="box">
                <div class="box-header with-border">
                    <h3 class="box-title"> 1-ый блок </h3>
                </div>
                <div class="box-body">
                    <div class="form-group">
                        <label>Заголовок</label>
                        <input class="form-control string"
                               type="text" placeholder=""
                               value="{{$about->title0_field}}"
                               data-name="title0"
                               data-type="string"
                               data-block="about"
                               data-id="0">
                    </div>
                    <div class="form-group">
                        <label>Текст под заголовком</label>
                        <textarea class="form-control text"
                                  data-name="text0" data-reg="true"
                                  data-type="text"
                                  data-block="about"
                                  data-id="0">{{$about->text0_field}}</textarea>
                    </div>
                    <div class="form-group">
                        <label>Изображение (jpg, png 640×540 пикселей)</label>
                        <div class="dropzone">
                            <div class="file-input">
                                <div class="file-preview">
                                    <div class="input-group file-caption-main">

                                        <div class="file-preview-frame">
                                            <div class="kv-file-content">
                                                <img src="{{$about->image0_field->link}}?{{$about->image0_field->cache_index}}" class="kv-preview-data file-preview-image"
                                                     title="{{$about->image0_field->alt}}" alt="{{$about->image0_field->alt}}">
                                            </div>
                                            <div class="file-thumbnail-footer">
                                                <div class="file-footer-caption"
                                                     title="{{$about->image0_field->alt}}">{{$about->image0_field->name_field}}
                                                    <br> </div>
                                                <div class="file-actions">
                                                    <input type="text" class="form-control alt-text" data-block="about"
                                                           data-type="images" data-id="0" data-name="alt"
                                                           value="{{$about->image0_field->alt}}">
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
                                       data-block="about"
                                       data-name="image0"
                                       data-type="image"
                                       data-id="0">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="box">
                <div class="box-header with-border">
                    <h3 class="box-title"> 2-ой блок </h3>
                </div>
                <div class="box-body">
                    <div class="form-group">
                        <label>Заголовок</label>
                        <input class="form-control string"
                               type="text" placeholder=""
                               value="{{$about->title1_field}}"
                               data-name="title1"
                               data-type="string"
                               data-block="about"
                               data-id="0">
                    </div>
                    <div class="form-group">
                        <label>Текст под заголовком</label>
                        <textarea class="form-control text"
                                  data-name="text1" data-reg="true"
                                  data-type="text"
                                  data-block="about"
                                  data-id="0">{{$about->text1_field}}</textarea>
                    </div>
                    <div class="form-group">
                        <label>Изображение (jpg, png 400×400 пикселей)</label>
                        <div class="dropzone">
                            <div class="file-input">
                                <div class="file-preview">
                                    <div class="input-group file-caption-main">

                                        <div class="file-preview-frame">
                                            <div class="kv-file-content">
                                                <img src="{{$about->image1_field->link}}?{{$about->image1_field->cache_index}}" class="kv-preview-data file-preview-image"
                                                     title="{{$about->image1_field->alt}}" alt="{{$about->image1_field->alt}}">
                                            </div>
                                            <div class="file-thumbnail-footer">
                                                <div class="file-footer-caption"
                                                     title="{{$about->image1_field->alt}}">{{$about->image1_field->name_field}}
                                                    <br> </div>
                                                <div class="file-actions">
                                                    <input type="text" class="form-control alt-text" data-block="about"
                                                           data-type="images" data-id="0" data-name="alt"
                                                           value="{{$about->image1_field->alt}}">
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
                                       data-block="about"
                                       data-name="image1"
                                       data-type="image"
                                       data-id="0">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="box">
                <div class="box-header with-border">
                    <h3 class="box-title"> 3-ий блок </h3>
                </div>
                <div class="box-body">
                    <div class="form-group">
                        <label>Заголовок</label>
                        <input class="form-control string"
                               type="text" placeholder=""
                               value="{{$about->title2_field}}"
                               data-name="title2"
                               data-type="string"
                               data-block="about"
                               data-id="0">
                    </div>
                    <div class="form-group">
                        <label>Текст под заголовком</label>
                        <textarea class="form-control text"
                                  data-name="text2" data-reg="true"
                                  data-type="text"
                                  data-block="about"
                                  data-id="0">{{$about->text2_field}}</textarea>
                    </div>
                    <div class="form-group">
                        <label>Изображение (jpg, png 330×330 пикселей)</label>
                        <div class="dropzone">
                            <div class="file-input">
                                <div class="file-preview">
                                    <div class="input-group file-caption-main">

                                        <div class="file-preview-frame">
                                            <div class="kv-file-content">
                                                <img src="{{$about->image2_field->link}}?{{$about->image2_field->cache_index}}" class="kv-preview-data file-preview-image"
                                                     title="{{$about->image2_field->alt}}" alt="{{$about->image2_field->alt}}">
                                            </div>
                                            <div class="file-thumbnail-footer">
                                                <div class="file-footer-caption"
                                                     title="{{$about->image2_field->alt}}">{{$about->image2_field->name_field}}
                                                    <br> </div>
                                                <div class="file-actions">
                                                    <input type="text" class="form-control alt-text" data-block="about"
                                                           data-type="images" data-id="0" data-name="alt"
                                                           value="{{$about->image2_field->alt}}">
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
                                       data-block="about"
                                       data-name="image2"
                                       data-type="image"
                                       data-id="0">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="box">
                <div class="box-header with-border">
                    <h3 class="box-title"> 4-ый блок </h3>
                </div>
                <div class="box-body">
                    <div class="form-group">
                        <label>Заголовок</label>
                        <input class="form-control string"
                               type="text" placeholder=""
                               value="{{$about->title3_field}}"
                               data-name="title3"
                               data-type="string"
                               data-block="about"
                               data-id="0">
                    </div>
                    <div class="form-group">
                        <label>Текст под заголовком</label>
                        <textarea class="form-control text"
                                  data-name="text3" data-reg="true"
                                  data-type="text"
                                  data-block="about"
                                  data-id="0">{{$about->text3_field}}</textarea>
                    </div>
                    <div class="form-group">
                        <label>Изображение (jpg, png 280×250 пикселей)</label>
                        <div class="dropzone">
                            <div class="file-input">
                                <div class="file-preview">
                                    <div class="input-group file-caption-main">

                                        <div class="file-preview-frame">
                                            <div class="kv-file-content">
                                                <img src="{{$about->image3_field->link}}?{{$about->image3_field->cache_index}}" class="kv-preview-data file-preview-image"
                                                     title="{{$about->image3_field->alt}}" alt="{{$about->image3_field->alt}}">
                                            </div>
                                            <div class="file-thumbnail-footer">
                                                <div class="file-footer-caption"
                                                     title="{{$about->image3_field->alt}}">{{$about->image3_field->name_field}}
                                                    <br> </div>
                                                <div class="file-actions">
                                                    <input type="text" class="form-control alt-text" data-block="about"
                                                           data-type="images" data-id="0" data-name="alt"
                                                           value="{{$about->image3_field->alt}}">
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
                                       data-block="about"
                                       data-name="image3"
                                       data-type="image"
                                       data-id="0">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="box">
                <div class="box-header with-border">
                    <h3 class="box-title"> 5-ый блок </h3>
                </div>
                <div class="box-body">
                    <div class="form-group">
                        <label>Заголовок</label>
                        <input class="form-control string"
                               type="text" placeholder=""
                               value="{{$about->title4_field}}"
                               data-name="title4"
                               data-type="string"
                               data-block="about"
                               data-id="0">
                    </div>
                    <div class="form-group">
                        <label>Текст под заголовком</label>
                        <textarea class="form-control text"
                                  data-name="text4" data-reg="true"
                                  data-type="text"
                                  data-block="about"
                                  data-id="0">{{$about->text4_field}}</textarea>
                    </div>
                    <div class="form-group">
                        <label>Изображение (jpg, png 400×400 пикселей)</label>
                        <div class="dropzone">
                            <div class="file-input">
                                <div class="file-preview">
                                    <div class="input-group file-caption-main">

                                        <div class="file-preview-frame">
                                            <div class="kv-file-content">
                                                <img src="{{$about->image4_field->link}}?{{$about->image4_field->cache_index}}" class="kv-preview-data file-preview-image"
                                                     title="{{$about->image4_field->alt}}" alt="{{$about->image4_field->alt}}">
                                            </div>
                                            <div class="file-thumbnail-footer">
                                                <div class="file-footer-caption"
                                                     title="{{$about->image4_field->alt}}">{{$about->image4_field->name_field}}
                                                    <br> </div>
                                                <div class="file-actions">
                                                    <input type="text" class="form-control alt-text" data-block="about"
                                                           data-type="images" data-id="0" data-name="alt"
                                                           value="{{$about->image4_field->alt}}">
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
                                       data-block="about"
                                       data-name="image4"
                                       data-type="image"
                                       data-id="0">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="box">
                <div class="box-header with-border">
                    <h3 class="box-title"> 6-ой блок </h3>
                </div>
                <div class="box-body">
                    <div class="form-group">
                        <label>Заголовок</label>
                        <input class="form-control string"
                               type="text" placeholder=""
                               value="{{$about->title5_field}}"
                               data-name="title5"
                               data-type="string"
                               data-block="about"
                               data-id="0">
                    </div>
                    <div class="form-group">
                        <label>Текст под заголовком</label>
                        <textarea class="form-control text"
                                  data-name="text5" data-reg="true"
                                  data-type="text"
                                  data-block="about"
                                  data-id="0">{{$about->text5_field}}</textarea>
                    </div>
                    <div class="form-group">
                        <label>Изображение (jpg, png 330×330 пикселей)</label>
                        <div class="dropzone">
                            <div class="file-input">
                                <div class="file-preview">
                                    <div class="input-group file-caption-main">

                                        <div class="file-preview-frame">
                                            <div class="kv-file-content">
                                                <img src="{{$about->image5_field->link}}?{{$about->image5_field->cache_index}}" class="kv-preview-data file-preview-image"
                                                     title="{{$about->image5_field->alt}}" alt="{{$about->image5_field->alt}}">
                                            </div>
                                            <div class="file-thumbnail-footer">
                                                <div class="file-footer-caption"
                                                     title="{{$about->image5_field->alt}}">{{$about->image5_field->name_field}}
                                                    <br> </div>
                                                <div class="file-actions">
                                                    <input type="text" class="form-control alt-text" data-block="about"
                                                           data-type="images" data-id="0" data-name="alt"
                                                           value="{{$about->image5_field->alt}}">
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
                                       data-block="about"
                                       data-name="image5"
                                       data-type="image"
                                       data-id="0">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="box">
                <div class="box-header with-border">
                    <h3 class="box-title"> 7-ой блок </h3>
                </div>
                <div class="box-body">
                    <div class="form-group">
                        <label>Заголовок</label>
                        <input class="form-control string"
                               type="text" placeholder=""
                               value="{{$about->title6_field}}"
                               data-name="title6"
                               data-type="string"
                               data-block="about"
                               data-id="0">
                    </div>
                    <div class="form-group">
                        <label>Текст под заголовком</label>
                        <textarea class="form-control text"
                                  data-name="text6" data-reg="true"
                                  data-type="text"
                                  data-block="about"
                                  data-id="0">{{$about->text6_field}}</textarea>
                    </div>
                    <div class="form-group">
                        <label>Изображение (jpg, png 280×250 пикселей)</label>
                        <div class="dropzone">
                            <div class="file-input">
                                <div class="file-preview">
                                    <div class="input-group file-caption-main">

                                        <div class="file-preview-frame">
                                            <div class="kv-file-content">
                                                <img src="{{$about->image6_field->link}}?{{$about->image6_field->cache_index}}" class="kv-preview-data file-preview-image"
                                                     title="{{$about->image6_field->alt}}" alt="{{$about->image6_field->alt}}">
                                            </div>
                                            <div class="file-thumbnail-footer">
                                                <div class="file-footer-caption"
                                                     title="{{$about->image6_field->alt}}">{{$about->image6_field->name_field}}
                                                    <br> </div>
                                                <div class="file-actions">
                                                    <input type="text" class="form-control alt-text" data-block="about"
                                                           data-type="images" data-id="0" data-name="alt"
                                                           value="{{$about->image6_field->alt}}">
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
                                       data-block="about"
                                       data-name="image6"
                                       data-type="image"
                                       data-id="0">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="box">
                <div class="box-header with-border">
                    <h3 class="box-title"> 8-ой блок </h3>
                </div>
                <div class="box-body">
                    <div class="form-group">
                        <label>Заголовок</label>
                        <input class="form-control string"
                               type="text" placeholder=""
                               value="{{$about->title7_field}}"
                               data-name="title7"
                               data-type="string"
                               data-block="about"
                               data-id="0">
                    </div>
                    <div class="form-group">
                        <label>Текст под заголовком</label>
                        <textarea class="form-control text"
                                  data-name="text7" data-reg="true"
                                  data-type="text"
                                  data-block="about"
                                  data-id="0">{{$about->text7_field}}</textarea>
                    </div>
                    <div class="form-group">
                        <label>Изображение (jpg, png 400×400 пикселей)</label>
                        <div class="dropzone">
                            <div class="file-input">
                                <div class="file-preview">
                                    <div class="input-group file-caption-main">

                                        <div class="file-preview-frame">
                                            <div class="kv-file-content">
                                                <img src="{{$about->image7_field->link}}?{{$about->image7_field->cache_index}}" class="kv-preview-data file-preview-image"
                                                     title="{{$about->image7_field->alt}}" alt="{{$about->image7_field->alt}}">
                                            </div>
                                            <div class="file-thumbnail-footer">
                                                <div class="file-footer-caption"
                                                     title="{{$about->image7_field->alt}}">{{$about->image7_field->name_field}}
                                                    <br> </div>
                                                <div class="file-actions">
                                                    <input type="text" class="form-control alt-text" data-block="about"
                                                           data-type="images" data-id="0" data-name="alt"
                                                           value="{{$about->image7_field->alt}}">
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
                                       data-block="about"
                                       data-name="image7"
                                       data-type="image"
                                       data-id="0">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection