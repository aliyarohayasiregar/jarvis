const mahasiswa = [
    {
      nama: "Rey1",
      nim: "123",
    },
    {
      nama: "Rey",
      nim: "123",
    },
    {
      nama: "Rey",
      nim: "123",
    },
    {
      nama: "Rey",
      nim: "123",
    },
    {
      nama: "Rey5",
      nim: "123",
    },
  ];
  
  // biasa
  
  const namaMahasiswa = mahasiswa[0].nama;
  console.log(namaMahasiswa);
  
  // destructuring
  
  const { nama } = mahasiswa[4];
  console.log(nama);