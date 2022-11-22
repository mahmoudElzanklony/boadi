<template>
    <div class="dashboard">
        <side-navbar-component></side-navbar-component>
        <div class="content users table-data-page">
            <div class="container mb-4">
                <p class="d-flex mb-3 align-items-center justify-content-between main-title-toggle">
                    <span>{{ main_title }}</span>
                    <button class="btn black-btn btn-outline-primary"
                            data-toggle="modal" data-target="#update_box" @click="update_item(null)">
                        {{ switchWord('add_new_item') }}
                    </button>
                </p>
                <div class="overflow-auto">
                    <table class="myTable table text-center table-bordered table-striped table-hover">
                        <thead>
                        <tr>
                            <td v-for="i in handling_data['table_head_keys']" :key="i">
                                {{ i }}
                            </td>
                        </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div class="modal fade"  id="update_box" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="update_box_data">{{ item == null ? switchWord('add_new_item'):switchWord('update_new_item')+item.name }}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form method="post" @submit.prevent="save_ad">
                            <input v-if="item != null" type="hidden" name="id" :value="item.id">
                            <div class="form-group">
                                <img class="box-image" v-if="item != null"
                                     :src="'/images/ads/'+item['image']">
                                <img class="box-image" v-else
                                     src="/images/preview.png" >
                            </div>
                            <div class="form-group"
                                 v-for="(input,index) in Object.keys(handling_data['data_model'])" :key="index">
                                <label>{{ handling_data['data_model'][input] }}</label>
                                <select v-if="input =='is_visible'"
                                        :name="input" class="form-control" required>
                                    <option value="">{{ switchWord('select_best_choice') }}</option>
                                    <option value="1" :selected="item != null && item['is_visible'] == 1">{{ switchWord('yes') }}</option>
                                    <option value="0" :selected="item != null && item['is_visible'] == 0">{{ switchWord('no') }}</option>
                                </select>
                                <input v-else  :name="input" class="form-control"
                                       :value="item != null ? item[input]:''" :required="input.indexOf('tags') == -1">
                                <p class="alert alert-danger"></p>
                            </div>
                            <div class="form-group">
                                <div class="drag-drop-files">
                                    <input type="file" class="preview-image" name="image" accept="image/*"
                                           selector=".modal-dialog img.box-image">
                                    <button type="button" class="btn btn-primary">
                                        <span>{{ switchWord('upload_image') }}</span>
                                        <span><i class="ri-add-line"></i></span>
                                    </button>
                                </div>
                            </div>
                            <div class="form-group">
                                <input type="submit" name="save" class="btn btn-primary"
                                       :value="switchWord('save')">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">
                            {{ switchWord('close') }}
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import SideNavbarComponent from "../../components/dashboard/SideNavbarComponent";
import tableData from "../../mixin/tableData";
import SwitchLangWord from "../../mixin/SwitchLangWord";
import delete_item from "../../mixin/delete_item";
import update_item from "../../mixin/update_item";
import {mapState,mapActions , mapGetters , mapMutations} from "vuex";
export default {
    name: "ads",
    mixins:[tableData,SwitchLangWord,update_item,delete_item],
    props:['main_title','handling_data'],
    data:function(){
        return {
            modal_data:[],
            table_url:'/paginate-data',
            table_requested_table:'ads',
            table_columns:null,
            page_data:null,
        }
    },
    mounted() {
        var component = this;
        let all_thead_tds = document.querySelectorAll('table thead tr td:not(:last-of-type)');
        for( let input in all_thead_tds){
            if(!(isNaN(input)) && input != 0) {
                all_thead_tds[input].innerHTML =
                    '<input class="form-control" placeholder="'+all_thead_tds[input].textContent.trim()+'" name="'+Object.keys(this.handling_data['table_head_keys'])[input]+'">';
            }
        }

        $('table').on('click',' tbody td:last-of-type .actions span:first-of-type',function(){
            var id = $(this).find('i').attr('row_id');
            var item = component.page_data.find((e)=>{
                return e['id'] == id;
            });
            component.update_item(item);
            $('.modal').modal('show');
        });

        $('table').on('click',' tbody td:last-of-type .actions span:last-of-type',function(){
            var row = $(this).parent().parent().parent();
            component.delete_item('ads',$(this).attr('row_id'),row);
        });
    },
    methods:{
        ...mapActions({
            'save_ad':'ads/save_ad'
        }),
        ...mapMutations({
            'update_data':'ads/update_data',
            'inilaize_data':'ads/inilalize_data',
        }),
    },
    created() {
        this.inilaize_data(this.handling_data['data'])
        this.modal_data = this.handling_data['data_model'];
        var component = this;
        this.table_columns = [
            { "data": "image",
                "render":function(data,type,row){
                    return '<img src="/images/ads/'+data+'">';
                }
            },
            { "data": "name" },
            { "data": "link",
               "render":function (data){
                   return '<a href="'+data+'" target="_blank">'+data+'</a>';
               }
            },
            { "data": "is_visible",
                "render":function(data,type,row){
                    return data == 0 ? component.switchWord('no'):component.switchWord('yes');
                }
            },
            { "data": "id",
                "render":function(data,type,row){
                    return "<p class='actions row_"+data+"'><span><i  row_id='"+data+"' class='ri-edit-line'></i></span><span class='delete delete_jquery' row_id='"+data+"' table='ads'><i class='ri-close-line'></i></span></p>"
                }
            },
        ];
    },
    components: {SideNavbarComponent}
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";
.alert-danger{
    display: none;
}
table img {

}
</style>
