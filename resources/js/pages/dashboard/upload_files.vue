<template>
    <div class="dashboard">
        <side-navbar-component></side-navbar-component>
        <div class="content users table-data-page">
            <div class="container mb-4">
                <p class="d-flex mb-3 align-items-center justify-content-between main-title-toggle">
                    <span>{{ main_title }}</span>
                </p>
                <p class="alert alert-success">
                    <a href="/excels/template.csv" download>{{ switchWord('download_this_template') }}</a>
                </p>
                <div>
                    <form method="post" @submit.prevent="save_files">
                        <div class="row">
                            <div class="col-12">
                                <div class="form-group">
                                    <div class="drag-drop-files">
                                        <input type="file" name="file" >
                                        <p class="alert alert-danger"></p>
                                        <button type="button" class="btn btn-primary">
                                            <span>{{ switchWord('upload_file') }}</span>
                                            <span><i class="ri-add-line"></i></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <input type="submit" name="save" class="btn btn-primary"
                                   :value="switchWord('save')">
                        </div>
                    </form>
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
    name: "brands",
    mixins:[tableData,SwitchLangWord,update_item,delete_item],
    props:['main_title','handling_data'],
    data:function(){
        return {
            modal_data:[],
        }
    },
    methods:{
        ...mapActions({
            'save_files':'upload_files/save_files'
        }),
    },
    components: {SideNavbarComponent}
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";
.alert-danger{
    display: none;
}
</style>
