import {saveComment} from './index';
import {SAVE_COMMENT} from '../constants';

describe('saveComment', () => {

    let action: any;

    beforeEach(()=> {
        action = saveComment('new comment');
    })

    it('has the correct type', () => { 

        expect(action.type).toEqual(SAVE_COMMENT);
    });

    it('has the correct payload', () => {

        expect(action.payload).toEqual('new comment');
    })
})