import StickyHeader from 'react-sticky-header';
import Heading from './heading';

const Header = () => (
    <div id="heading" className="heading">        
        <StickyHeader
            header={
                <div className="Header_root">          
                    <Heading/>
                </div>
            }
        >
        </StickyHeader>
    </div>
);

export default Header;