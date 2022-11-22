import validation from "../../formValidation/validation";

export default {
    namespaced:true,
    actions:{
        save_message:function({commit,getters,state}){
            var target = event.target;
            var data = new FormData(target);
            /*if(grecaptcha.getResponse().length == 0){
                window.Toast.fire({
                   icon:'error',
                   title:'من فضلك تحقق من الكابتشا اولا',
                });
                return false;
            }*/
            axios.post('/contactus/save',data).then((e)=>{
                validation(e.data,target,'',true);
            });
        },
    }
}
