$(document).ready(function(){setTimeout(function(){var total,pageTotal;var table=$('#dom-jqry').DataTable();$('#colum-rendr').DataTable({"columnDefs":[{"render":function(data,type,row){return data+' ('+row[3]+')';},"targets":0},{"visible":false,"targets":[3]}]});$('#multi-table').DataTable({"dom":'<"top"iflp<"clear">>rt<"bottom"iflp<"clear">>'});$('#complex-header').DataTable({"columnDefs":[{"visible":false,"targets":-1}]});$('#lang-file').DataTable({"language":{"url":"//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/German.json"}});$('#setting-default').DataTable();var table1=$('#row-grouping').DataTable({"columnDefs":[{"visible":false,"targets":2}],"order":[[2,'asc']],"displayLength":25,"drawCallback":function(settings){var api=this.api();var rows=api.rows({page:'current'}).nodes();var last=null;api.column(2,{page:'current'}).data().each(function(group,i){if(last!==group){$(rows).eq(i).before('<tr class="group"><td colspan="5">'+group+'</td></tr>');last=group;}});}});$('#row-grouping tbody').on('click','tr.group',function(){var currentOrder=table.order()[0];if(currentOrder[0]===2&&currentOrder[1]==='asc'){table.order([2,'desc']).draw();}else{table.order([2,'asc']).draw();}});$('#footer-callback').DataTable({"footerCallback":function(row,data,start,end,display){var api=this.api(),data;var intVal=function(i){return typeof i==='string'?i.replace(/[\$,]/g,'')*1:typeof i==='number'?i:0;};total=api.column(4).data().reduce(function(a,b){return intVal(a)+intVal(b);},0);pageTotal=api.column(4,{page:'current'}).data().reduce(function(a,b){return intVal(a)+intVal(b);},0);$(api.column(4).footer()).html('$'+pageTotal+' ( $'+total+' total)');}});$('#custm-tool-ele').DataTable({"dom":'<"toolbar">frtip'});$("div.toolbar").html('<b>Custom tool bar! Text/images etc.</b>');$('#row-callback').DataTable({"createdRow":function(row,data,index){if(data[5].replace(/[\$,]/g,'')*1>150000){$('td',row).eq(5).addClass('highlight');}}});},350);});