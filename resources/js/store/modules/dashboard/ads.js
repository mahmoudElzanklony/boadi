import validation from "../../../formValidation/validation";

export default {
    namespaced:true,
    state(){
        return {
            data:null,
        }
    },
    getters:{
        get_data:function (state){
            return state.data
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
        save_ad:function({commit,getters,state}){
            var target = event.target;
            var data = new FormData(target);
            var com = this;
            axios.post('/dashboard/save-ad',data).then((e)=>{
                validation(e.data,target,'',true);
                // check if there is no error
                if(e.data.status == 200 && e.data.related == 'insert'){
                }else if(e.data.status == 200 && e.data.related == 'update'){
                    var tr = $('.row_'+e.data.data['id']).parent().parent();

                    window.table_data.cell(tr.find('td').eq(0)).data(e.data.data['image']).draw(false)
                    window.table_data.cell(tr.find('td').eq(1)).data(e.data.data['name']).draw(false)
                    window.table_data.cell(tr.find('td').eq(2)).data(e.data.data['is_visible']).draw(false)
                }
            });
        }
    }
}
