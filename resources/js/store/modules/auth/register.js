import validation from "../../../formValidation/validation";

export default {
    namespaced:true,
    state(){
       return {
           message:'',
           errors:[],
       }
    },
    getters:{

    },
    mutations:{

    },
    actions:{
        store_personal_data:function(){
            document.querySelector('.loading').style.display = 'flex';
            var target = event.target;
            var data = new FormData(target);
            axios.post('/register/',data).then((e)=>{
                validation(e.data, target, '/login');
            }).finally(()=>{
                document.querySelector('.loading').style.display = 'none';
            });
        },

    },
}
