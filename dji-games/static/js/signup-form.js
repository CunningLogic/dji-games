<!--
function onbeforesubmit()
{
return true;
}
//-->
</script>
<script language="javascript">
<!--
  var error;
var form_lanuage = 'en';
function is_1_valid(input)
{
  if(input == "")
  {
    error += "First Name: missing data!\n";
    return false;
  }

  return true;
}
function is_2_valid(input)
{
  if(input == "")
  {
    error += "Last Name: missing data!\n";
    return false;
  }

  return true;
}
function is_11_valid(input)
{
  if(input == "")
  {
    error += "City: missing data!\n";
    return false;
  }

  return true;
}
function is_14_valid(input)
{
  if(input == "")
  {
    error += "Country: missing data!\n";
    return false;
  }

  return true;
}
function is_3_valid(input)
{
  if(input == "")
  {
    error += "E-Mail: missing data!\n";
    return false;
  }

  return true;
}

function CheckInputs()
{
  var check_ok = true;
  error = "Wrong input!\n";
  check_ok = (is_1_valid(document.ProfileForm.inp_1.value) && check_ok);
  check_ok = (is_2_valid(document.ProfileForm.inp_2.value) && check_ok);
  check_ok = (is_11_valid(document.ProfileForm.inp_11.value) && check_ok);
  check_ok = (is_14_valid(document.ProfileForm.inp_14.options[document.ProfileForm.inp_14.selectedIndex].value) && check_ok);
  check_ok = (is_3_valid(document.ProfileForm.inp_3.value) && check_ok);
  if(check_ok == false)
    alert(error);
  return check_ok;
}
//-->
</script>


<script language="javascript">
function SubmitIt(){
                if(CheckInputs() == true){
                                if(window.onbeforesubmit)
                                                onbeforesubmit();
                                document.ProfileForm.submit();
                }
}

function MailIt(){
                if(CheckInputs()){
                                if((document.ProfileForm.subject.value=='') || (document.ProfileForm.msg.value==''))
                                                alert('Bitte f\u00fcr Sie die Nachrichtenfelder aus!');
                                else
                                                document.ProfileForm.submit();
    }
}

function FieldWithName(frm, fieldname, numofield)
{
    if(!numofield)
        numofield = 0;
    field_count = 0;
    for(i = 0; i < frm.elements.length; ++i)
    {
        if(frm.elements[i].name == fieldname)
        {
            if(field_count == numofield)
                return frm.elements[i];
            else
                field_count++;
        }
    }
}
function NumChecked(frm, fieldname)
{
    var count = 0;
    for(i = 0; i < frm.elements.length; ++i)
    {
        if(frm.elements[i].name == fieldname && frm.elements[i].checked == true)    
            ++count;
    }
    return count;
}
function NumSel(field)
{
    var count = 0;
    for(i = 0; i < field.length; ++i)
        if(field[i].selected == true) ++count;
    return count;
}
</script>

<script language="javascript">
var multiFields = new Array();
var dateFields = new Array();
multiFields["interest[]"] = "interest"
multiFields["optin"] = "optin"
var arr_interest = new Array();
</script>