const isString = (currentValue) => typeof currentValue === 'string'

const temukanPelanggar = (dataKTP) => {
  //verifikasi tipe data KTP
  if (typeof dataKTP === 'object') {
    //verifikasi tipe setiap data KTP
    if (dataKTP.every(isString) === true) {
      //mengurutkan data KTP
      let urutanDataKTP = dataKTP.sort(), dataKTPPelanggar = []
      //mem-filter data KTP yang terlihat ganda
      for (let i = 0; i < urutanDataKTP.length; i++) {
        if (urutanDataKTP[i] === urutanDataKTP[i + 1]) {
          dataKTPPelanggar.push(urutanDataKTP[i])
        } else {
          continue
        }
      }
      console.log(dataKTPPelanggar)
    } else {
      console.log('Setiap data harus berupa string')
    }
  } else {
    console.log('Data harus berupa object')
  }
}

temukanPelanggar([
  '3871921234567', '3871921198003', '3871929000092', 
  '3871921234567', '3871929000092', '3871392900003',
  '3871392900075'
])
temukanPelanggar([
  '3871921234567', 3871921198003, '3871929000092', 
  3871921234567, '3871929000092', '3871392900003',
  '3871392900075'
])
temukanPelanggar('3871392900075')