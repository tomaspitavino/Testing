async function getContact(contactId){
   const response = await $.ajax({
      url: `/contacts/${contactId}`,
      dataType: "json",
   });

return {
    id: +response.id,
    name: response.name,
    birthdate: new Date(response.birthdate),
 };
}

getContact(1).then(contact => {
    contact.id = "1234"
    contact.birthdate = "12/12/1990";
});

getContact(2).then(contact => {
    console.log("contact: ", JSON.stringify(contact));