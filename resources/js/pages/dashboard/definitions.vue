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

        <div class="modal fade" id="update_box" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="update_box_data">{{ item == null ? switchWord('add_new_item'):switchWord('update_new_item')+item.term_in_arabic }}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form method="post" @submit.prevent="save_definition">
                            <input v-if="item != null" type="hidden" name="id" :value="item.id">
                            <div class="form-group"
                                 v-for="(input,index) in Object.keys(handling_data['data_model'])" :key="index">
                                <label>{{ handling_data['data_model'][input] }}</label>
                                <textarea v-if="input == 'expression'" :name="input"
                                          class="form-control" :value="item != null ? item[input]:''" required></textarea>
                                <input v-else :name="input" class="form-control"
                                       :value="item != null ? item[input]:''" :required="input.indexOf('tags') == -1">
                                <p class="alert alert-danger"></p>
                            </div>

                            <VoerroTagsInput element-id="tags"
                                             v-if="item == null || (item != null && item.tags.length == 0)"
                                        :existing-tags="tags_inputs"
                                        :typeahead="true"></VoerroTagsInput>

                            <VoerroTagsInput element-id="tags" v-else
                                             v-model="item['tags']"
                                             :existing-tags="tags_inputs"
                                             :typeahead="true"></VoerroTagsInput>

                            <div class="form-group mt-3">
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
import {mapState,mapActions , mapGetters , mapMutations} from "vuex";
import VoerroTagsInput from '@voerro/vue-tagsinput';
import "@voerro/vue-tagsinput/dist/style.css";
export default {
    name: "definitions",
    mixins:[tableData,SwitchLangWord,delete_item],
    props:['main_title','handling_data'],
    data:function(){
        return {
            modal_data:[],
            table_url:'/paginate-data',
            table_requested_table:'definisions_dash',
            table_columns:null,
            page_data:null,
            item:null,
            tags_inputs:this.handling_data['tags'],
            selectedTags: [
                { key: 'web-development', value: 'Web Development' },
                { key: 'php', value: 'PHP' },
                { key: 'javascript', value: 'JavaScript' },
            ],
            /*selectedTags: [
                { key: 'web-development', value: 'Web Development' },
                { key: 'php', value: 'PHP' },
                { key: 'javascript', value: 'JavaScript' },
            ],*/
        }
    },
    mounted() {
        var component = this;
        let all_thead_tds = document.querySelectorAll('table thead tr td:not(:last-of-type)');
        for( let input in all_thead_tds){
            if(!(isNaN(input))) {
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
            component.delete_item('definisions',$(this).attr('row_id'),row);
        });
    },
    computed:{
        ...mapGetters({
            'vuex_data':'definitions/get_data',
        }),
    },
    methods:{
        ...mapActions({
            'save_definition':'definitions/save_brand'
        }),
        ...mapMutations({
            'update_data':'definitions/update_data',
            'inilaize_data':'definitions/inilalize_data',
        }),
        update_item:function (e){
            if(e['tags'].length > 0){
                var tags_input = e['tags'];
                delete e['tags'];
                this.item = e;
                this.item['tags'] = [];
                for(let tag of tags_input){
                    this.item['tags'].push(
                        {
                            key:tag['id'],
                            value:tag['name'],
                        }
                    );
                }
            }else {
                this.item = e;
            }
        }
    },
    created() {
        this.inilaize_data(this.handling_data['data'])
        this.modal_data = this.handling_data['data_model'];
        var component = this;
        this.table_columns = [
            { "data": "term_in_arabic" },
            { "data": "term_in_english",
                "render":function(data,type,row){
                    return '<p class="d-flex align-items-center justify-content-between"><span>'+data+'</span><span class="table-icon"><i class="ri-volume-down-line" ></i></span></p>';
                }
            },
            { "data": "tags","render":function(data,type,row){
                    var output = '<p class="d-flex align-items-center justify-content-between">';
                    for(let tag of row['tags']) {
                        output+= '<span class="tag">' + tag['name'] + '</span>';
                    }
                    output += '</p>';
                    return output;
                }
            },
            { "data": "expression" },
            { "data": "id",
                "render":function(data,type,row){
                    return "<p class='actions row_"+data+"'><span><i  row_id='"+data+"' class='ri-edit-line'></i></span><span class='delete delete_jquery' row_id='"+data+"' table='definisions'><i class='ri-close-line'></i></span></p>"
                }
            },
        ];
    },
    components: {SideNavbarComponent,VoerroTagsInput},
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";
.alert-danger{
    display: none;
}
</style>
