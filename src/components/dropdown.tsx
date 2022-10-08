import React from 'react'
import Select from 'react-select'

import { colourOptions } from "./data/data";


const Dropdown = () => (
    <div>
        My favorite color is
        <Select
            closeMenuOnSelect={false}
            defaultValue={colourOptions[4]}
            options={colourOptions}
            classNamePrefix="react-select"
            className="react-select--inline"
            components={{
                IndicatorsContainer: () => null
            }}
            isSearchable={false}
        />
    </div>
);

export default Dropdown;