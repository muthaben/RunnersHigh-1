import React from 'react'
import DaumPostcode from 'react-daum-postcode'

function DaumAdress({serchAdress , onCloseSerchHandle}) {

  const handleComplete = (data) => {
    console.log(data)
    let fullAddress = data.address;
    let extraAddress = ''; 
    
    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
      }
      fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
    }

    // console.log(fullAddress);  // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    serchAdress(fullAddress)
    // onCloseSerchHandle()
  }

  return (
    <div className='adress_serch'> 
    <i className='fas fa-times' onClick={onCloseSerchHandle} />
    <DaumPostcode
      onComplete={handleComplete}
      animation={true}
      style={{ maxWidth: '600px' }}
    />
       </div>
  );
}

export default DaumAdress