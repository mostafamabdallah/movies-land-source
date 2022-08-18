import React from 'react'

type MyProps = {
    noofItems: number;
};
class Loading extends React.Component<MyProps> {

    render() {
        return (
            <>
                {Array(this.props.noofItems).fill(0).map((el, i) => {
                    return (<div key={i} className='h-80 seckleton'></div>)
                }
                )}
            </>
        );
    }
}

export default Loading