/** @interface */
function CryptoJSInterface(seed) {}

/** @type {!CryptoJSInterface} */
var CryptoJS =
{
  "lib":
  {
    "WordArray":
    {
      "prototype":
      {
        "random": function(byte_count){},
      },
    },
  },
  "AES":
  {
    "prototype":
    {
      "encrypt": function(msg, key){},
      "decrypt": function(msg, key){},
    },
  },
  "enc":
  {
    "Utf8": {},
    "Hex":
    {
      "stringify": function(array){},
      "parse": function(string){},
    },
    "Base64":
    {
      "stringify": function(array){},
      "parse": function(string){},
    },
  },
};
