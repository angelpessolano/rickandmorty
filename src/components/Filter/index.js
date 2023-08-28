
import {
      Radio,
      Card,
      List,
      ListItem,
      ListItemPrefix,
      Typography,
    } from "@material-tailwind/react";
import { useState } from "react";

const Filter_A = () => {
      const[character,setCharacter]=useState('');
      const[specie,setSpecie]=useState('');

      const handlebutton = (e) => {
            {e.target.name==="specie"?setSpecie(e.target.id):setCharacter(e.target.id)}
          };


      return(
            
        <div className="shadow bg-white w-auto h-278 absolute top-158 left-16 p-0 rounded-6  ">
        <span className="text-xs text-slate-500 font-medium pl-3">
            Character
          </span>
    <Card className="w-full max-w-[24rem]">
      <List className="flex-row">
        <ListItem className="p-0">
          <label
            htmlFor="horizontal-list-react"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <ListItemPrefix className="mr-3">
              <Radio
                name="character"
                id="All"
                ripple={false}
                className="hover:before:opacity-0"
                containerProps={{
                  className: "p-0",
                }}
                onChange={handlebutton}
              />
            </ListItemPrefix>
            <Typography color="blue-gray" className="font-medium">
              All
            </Typography>
          </label>
        </ListItem>
        <ListItem className="p-0">
          <label
            htmlFor="Starred"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <ListItemPrefix className="mr-3">
              <Radio
                name="character"
                id="Starred"
                ripple={false}
                className="hover:before:opacity-0"
                containerProps={{
                  className: "p-0",
                }}
                onChange={handlebutton}
              />
            </ListItemPrefix>
            <Typography color="blue-gray" className="font-medium">
            Starred
            </Typography>
          </label>
        </ListItem>
        <ListItem className="p-0">
          <label
            htmlFor="Others"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            
            <ListItemPrefix className="mr-3">
              <Radio
                name="character"
                id="Others"
                ripple={false}
                className="hover:before:opacity-0"
                containerProps={{
                  className: "p-0",
                }}
                onChange={handlebutton}
              />
            </ListItemPrefix>
            <Typography color="blue-gray" className="font-medium">
              Others
            </Typography>
          </label>
        </ListItem>
      </List>
    </Card>
    <span className="text-xs text-slate-500 font-medium pl-3">
            Specie
          </span>
    <Card className="w-full max-w-[24rem]">
      <List className="flex-row">
        <ListItem className="p-0">
          <label
            htmlFor="horizontal-list-react"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <ListItemPrefix className="mr-3">
              <Radio
                name="specie"
                id="All"
                ripple={false}
                className="hover:before:opacity-0"
                containerProps={{
                  className: "p-0",
                }}
                onChange={handlebutton}
              />
            </ListItemPrefix>
            <Typography color="blue-gray" className="font-medium">
              All
            </Typography>
          </label>
        </ListItem>
        <ListItem className="p-0">
          <label
            htmlFor="Starred"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <ListItemPrefix className="mr-3">
              <Radio
                name="specie"
                id="human"
                ripple={false}
                className="hover:before:opacity-0"
                containerProps={{
                  className: "p-0",
                }}
                onChange={handlebutton}
              />
            </ListItemPrefix>
            <Typography color="blue-gray" className="font-medium">
            Human
            </Typography>
          </label>
        </ListItem>
        <ListItem className="p-0">
          <label
            htmlFor="alien"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            
            <ListItemPrefix className="mr-3">
              <Radio
                name="specie"
                id="alien"
                ripple={false}
                className="hover:before:opacity-0"
                containerProps={{
                  className: "p-0",
                }}
                onChange={handlebutton}
              />
            </ListItemPrefix>
            <Typography color="blue-gray" className="font-medium">
              Alien
            </Typography>
          </label>
        </ListItem>
      </List>
    </Card>
    <div class="md:flex md:items-center">
    <div class="md:w-1/3"></div>
    <div class="md:w-2/3">
    
      <button class={`shadow bg-purple-400 hover: bg-purple-500 focus:shadow-outline
       focus:outline-none text-white font-bold py-2 px-4 rounded ${character==='' && specie===''?'rounded opacity-50 cursor-not-allowed':''}`} type="button" onClick={()=>{console.log(character,specie);}}>
       Filter
      </button>
    </div>
  </div>
    
  </div>
       )
}
 export default Filter_A