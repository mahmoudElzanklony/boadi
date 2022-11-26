import validation from "../../formValidation/validation";

export default {
    namespaced:true,
    state(){
        return {
            data:[],
        }
    },
    getters:{
        get_data:(state)=>{
            return state.data;
        },
    },
    mutations:{
        inialize_data:function (state,item){
            state.data = item;
        },
    },
    actions:{
        load_ads:function({commit,getters,state}){
            axios.post('/load-ads').then((e)=>{
                commit('inialize_data',e.data.data);
            });
        },
    }
}
