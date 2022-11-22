import validation from "../../../formValidation/validation";

export default {
    namespaced:true,
    state(){
        return {
            data:null,
            quotation_data:[],
        }
    },
    getters:{
        get_data:function (state){
            return state.data
        },
        get_data_quotations:function (state){
            return state.quotation_data
        }
    },
    mutations:{
        inilalize_data:function (state,item){
            return state.data = item;
        },
        update_data:function(state,item){
            if(state.data == null){
                return state.data = item;
            }
            return state.data.push(item);
        },
        update_qotation_data:function(state,item){
            return state.quotation_data = item;
        },
        update_index_data:function (state,payload){
            let id = state.data.findIndex((item)=>{
                return item.id ==  payload.id;
            });
            if(id >= 0){
                Vue.set(state.data, id, payload);
            }
        }
    },
    actions:{
        get_info_about_quotation: async function({commit,getters,state},payload_id){
            $('.box-model-table').DataTable().destroy();
            document.querySelector('.loading-img').style.display='block';
            await axios.post('/quotations/get-quotations-info',{
                'quotation_id':payload_id
            }).then((e)=>{

                /*$('.myTable.box-model-table').dataTable({
                    destroy: true,
                    aaData: e.data.data
                });*/
                commit('update_qotation_data',e.data.data)
            }).finally(function (){
                if(window.vm.$inertia.page.props.lang == 'ar'){
                    var url = 'https://cdn.datatables.net/plug-ins/1.11.4/i18n/ar.json';
                    var export_selected = 'استيراد المحدد';
                }else{
                    var url = 'https://cdn.datatables.net/plug-ins/1.11.4/i18n/en-gb.json';
                    var export_selected = 'Export selected';
                }
                var data_table = null;
                document.querySelector('.loading-img').style.display='none';
                data_table = $('.box-model-table').DataTable( {
                    language: {
                        url: url,
                    },
                    dom: 'lBfrtip',
                    buttons: [
                        'copy', 'csv', 'excel', 'print',
                        {
                            extend: 'excel',
                            text:export_selected,
                            exportOptions: {
                                columns: ':visible:not(.not-exported)',
                                rows: '.selected',
                            }
                        }
                    ]
                } );
            });
        }
    }
}
