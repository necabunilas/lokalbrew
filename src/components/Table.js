import React, { useState } from 'react';
import { StartCase } from 'react-lodash';
import TableEntries from './TableEntries';

export default function Table(props) {

    const [ordersTable, setTable] = useState(false);

    function updateState(event){
        
      event.preventDefault();
      setTable(true);
  
    }

    function exitPage(){
		setTable(false);
    }

    if(ordersTable){
        return <TableEntries name={props.name} exitPage={exitPage} />;
    }else{
        return (
			<div className={props.name + ' table'} onClick={updateState}>
				<p>
					<StartCase string={props.name} />
				</p>
			</div>
		);
    }
	
}
