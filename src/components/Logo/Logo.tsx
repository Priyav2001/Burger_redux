import * as React from 'react';
import './Logo.scss';

interface Props {
}

const Logo: React.FunctionComponent<Props> = (props: Props) => {
    return(
        <div className="Logo">
            <img src='../../assets/images/burger-logo.png' alt='MyBurger'/>
        </div>
    );
};

export default Logo;