<template>
    <div class="dashboard">
        <side-navbar-component></side-navbar-component>
        <div class="content users table-data-page">
            <div class="container mb-4">
                <p class="d-flex mb-3 align-items-center justify-content-between main-title-toggle">
                    <span>{{ main_title }}</span>
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

    </div>
</template>

<script>
import SideNavbarComponent from "../../components/dashboard/SideNavbarComponent";
import tableData from "../../mixin/tableData";
import SwitchLangWord from "../../mixin/SwitchLangWord";
import delete_item from "../../mixin/delete_item";
import {mapState,mapActions , mapGetters , mapMutations} from "vuex";
export default {
    name: "contact_us",
    mixins:[tableData,SwitchLangWord,delete_item],
    props:['main_title','handling_data'],
    data:function(){
        return {
            modal_data:[],
            table_url:'/paginate-data',
            table_requested_table:'contacts',
            table_columns:null,
            page_data:null,
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


        $('table').on('click',' tbody td:last-of-type .actions span:last-of-type',function(){
            var row = $(this).parent().parent().parent();
            component.delete_item('contacts',$(this).attr('row_id'),row);
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
        var component = this;
        this.table_columns = [
            { "data": "name" },
            { "data": "email","render":function (data){
                    return '<a href="mailto:'+data+'">'+data+'</a>';
                }
            },
            { "data": "phone","render":function (data){
                    return '<a  href="tel:'+data+'" >'+data+'</a>';
                }
            },
            { "data": "reason" },
            { "data": "message"},
            { "data": "id",
                "render":function(data,type,row){
                    return "<p class='actions row_"+data+"'><span class='delete delete_jquery' row_id='"+data+"' table='definisions'><i class='ri-close-line'></i></span></p>"
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
