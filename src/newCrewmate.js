import { supabase } from '../client'

const createCrewmate = async (event) => {
    event.preventDefault();
  
    await supabase
      .from('crewmate')
      .insert({name: crewmate.name, speed: crewmate.speed, color: crewmate.color})
      .select();
  
    window.location = "/";
  }


  return{

  }

