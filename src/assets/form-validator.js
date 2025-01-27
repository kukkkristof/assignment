function validate()
{
    let firstnameelement = $("[name='firstname']").val(); // name selectors
    let lastnameelement = $("[name='lastname']").val();
    let emailelement = $("[name='email']").val();
    let genderelement = $(".mat-mdc-radio-checked").text(); // class selector
    if(genderelement != 'Male') genderelement = 'Female';
    let messageelement = $('textarea').val(); // tagname selector
    let dateofbirthelement = $("#date-of-birth").val(); // id selector
    let colorelement = $("#favcolor").val();
    let notifyelement = $(".mdc-checkbox--selected").length==1;
    
    let json_data = [];
    json_data['firstname'] = firstnameelement;
    json_data['lastname'] = lastnameelement;
    json_data['email'] = emailelement;
    json_data['gender'] = genderelement;
    json_data['message'] = messageelement;
    json_data['dateofbirth'] = dateofbirthelement;
    json_data['color'] = colorelement;
    json_data['notify'] = notifyelement;
    console.log(json_data);
}