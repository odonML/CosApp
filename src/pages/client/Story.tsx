import React from 'react';
import { useParams } from 'react-router';

export const Story = () => {
    const param:any = useParams();
    console.log(param);
    return (
        <div>
            {param.id}
        </div>
    );
}

