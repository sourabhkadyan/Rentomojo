function render(data){
    var html = "<div class='commentBox'><div class ='leftPanelImg'><img src='https://placeholdit.imgix.net/~text?w=100&h=100'/></div><div class='rightPanel'><span>"+data.name+"</span><div class='date'>"+data.date+"</div><p>"+data.body+"</p></div><div class='clear'></div></div>";
    $('#container').append(html);
}

$(document).ready(function(){

    var coment = [
        {"name":"Sourabh", "date": "06 july, 2019", "body":"test comment"}
    ];

    for(var i=0;i<coment.length;i++){
        render(coment[i]);
    }
    $('#addComent').click(function(){
       var addObj = {
           "name": ${'#name'}.val(),
           "date": ${'#date'}.val(),
           "body": ${'#bodyText'}.val()
       };
       coment.push(addObj);
       render(addObj);
        ${'#name'}.val('');
        ${'#date'}.val('dd/mm/yyyy');
        ${'#bodyText'}.val('');
    });
});