import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import Actions from '../../store/actions/index';

const Main = (props: any) => {

    useEffect(() => {
        console.log(props);
    }, []);

    function divClick() {
        Actions.test.letUsTest();
    }

    return (
        <div>
            <div onClick={divClick}>main screen</div>
            {props.isShow && <div>show</div>}
        </div>
    );
}

function mapState2Props(store: any) {
    return {
        isShow: store.test.isShow
    }
}

const MainWithStore = connect(mapState2Props)(Main);

export default MainWithStore;