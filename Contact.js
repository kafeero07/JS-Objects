// Business Logic for AddressBook ---------
function AddressBook() 
{
	this.contacts=[]
}
function Contact(first_name, last_name, phone_number, email, address) 
{
  this.first_name=first_name,
  this.last_name =last_name,
  this.phone_number =phone_number,
  this.email = email,
  this.address = address
}

    Contact.prototype.full_name = function()
 {

console.log("full_name:" + this.first_name + " " + this.last_name);
}
var David = new Contact ( " David " + " Kafeero " + " 0777730060 " + "  ssalongoman@gmail.com " + " Namirembe " + "Kampala " + "Uganda ");
David.full_name ();
