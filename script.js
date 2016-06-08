function showprop(obj)
{
  for (i in student) 
  {
    console.log(i);
  }

}

function Multiplier()
{
  var numsup;
  
  this.multiply= function(number)
  {
    numsup= parseInt(number)*1;

  }
  this.getCurrentValue = function()
  {
    console.log(numsup);


  }

}

function album ()
{
  var list = new Array();
  this.addPhoto = function (name, location)
  {
    console.log("file name is" +name+ "and location is" +location +"!!!");
    photox = new photo(name, location);
    list.push(photox);
  }
  this.printDaa = function()
  {
    for(var i  in list)
    {
      console.log(list[i]);
    }
  }
}

function photo (name,location)
{
  this.new = name;
  this.location = location;
  
}

