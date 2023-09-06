import { Modal, useMantineTheme } from '@mantine/core';
import "../ModelProfile/ModelProfile.css"

function ModelProfile({openEdit,setOpenEdit,handleModel,
                      name,setName,userName,
                      setUserName,countryName,setCountryName,
                      jobName,setJobName
                      }) 
                      {
  const theme = useMantineTheme();

  
  return (
    <>
      <Modal
        radius="8px"
        zIndex="1001"
        size="lg"
        opened={openEdit}
        title="Edit Info"
        onClose={()=>setOpenEdit(false)}
        overlayProps={{
          color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[10],
         
        }}
      >
        <form className='modelForm' onSubmit={handleModel}>
        <div className="row1">
          <div className="inputBox1">
            <input type="text" name="name" id="name" placeholder='Enter Name'
                  onChange={(e)=>setName(e.target.value)}
                  value={name} 
                  required/>
                  
          </div>

          <div className="inputBox1">
            <input type="text" name="username" id="name" placeholder='Enter User Name'
                    onChange={(e)=>setUserName(e.target.value)}
                    value={userName}
                    required/>
          </div>
        </div>

          <div className="inputBox1">
            <input type="text" name="countryname" id="name" placeholder='Enter Country'
                    onChange={(e)=>setCountryName(e.target.value)}
                    value={countryName}
                    required/>
          </div>

          <div className="inputBox1">
            <input type="text" name="jobname" id="name" placeholder='Enter Job'
                   onChange={(e)=>setJobName(e.target.value)}
                   value={jobName}
                   required/>
          </div>

          

          <button className='modelBtn'>Update</button>
        </form>
      </Modal>
    </>
  );
}


export default ModelProfile