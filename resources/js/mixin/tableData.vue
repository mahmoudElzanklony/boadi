<template>

</template>

<script>
export default {
    name: "tableData",
    data:function (){
        return {
            tableObj:null,
        }
    },
    mounted() {
        var url_request = this.table_url;
        var table_requested = this.table_requested_table;
        var columns = this.table_columns;
        var this_component = this;
        console.log(this_component);
        if(this.$inertia.page.props.lang == 'ar'){
            var url = 'https://cdn.datatables.net/plug-ins/1.11.4/i18n/ar.json';
            var export_selected = 'استيراد المحدد';
        }else{
            var url = 'https://cdn.datatables.net/plug-ins/1.11.4/i18n/en-gb.json';
            var export_selected = 'Export selected';
        }
        jQuery( document ).ready(function( $ ) {
            var data_table = null;
            data_table = $('.myTable').DataTable( {
                order: [[ 1, "desc" ]],
                language: {
                    url: url,
                },
                serverSide:true,
                ajax: function(data, callback, settings) {
                    // check if thead has searches
                    var searches = new Object();
                    if(document.querySelectorAll('thead tr td input').length > 0){
                        for(let input of document.querySelectorAll('thead tr td input')){
                            searches[input.name] = input.value;
                        }
                    }
                    axios.post(url_request+'?page='+(Number(data_table.page.info().page)+1),{
                        length:data.length,
                        table:table_requested,
                        searches:searches
                    }).then((e)=>{
                        this_component.page_data = e.data.data;
                        callback({
                            recordsTotal: e.data.total,
                            recordsFiltered: e.data.total,
                            data: e.data.data
                        });
                    })
                },
                columns: columns,
              //  dom: 'lBfrtip',
                /*buttons: [
                    'copy', 'csv', 'excel', 'print',
                    /!*{
                        extend: 'excel',
                        text:export_selected,
                        exportOptions: {
                            columns: ':visible:not(.not-exported)',
                            rows: '.selected',
                        }
                    }*!/
                ]*/
            } );
            this_component.tableObj = data_table;
            window.table_data = data_table;
        });
    }
}
</script>

<style lang="scss" scoped>

</style>
