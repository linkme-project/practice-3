require('should');

describe('debug', () => {
    describe('생성', () => {
        it('태그명을 인자로 받는다. (없으면 예외를 던진다)', () => {
            should(require('../utils/debug')()).throw();
        });

        it('함수를 반환한다.', () => {
            const debug = require('../utils/debug')('myTag');
            should(typeof debug).be.equal('function');
        });
    });

    describe('반환된 함수', () => {
        let debug, tag, msg;

        beforeEach(() => {
            tag = 'myTag';
            debug = require('../utils/debug')(tag);
            msg = 'my log message';
        });

        it('tag + message 형식의 로그 문자열을 반환한다.', () => {
            const expected = `${tag} ${msg}`;

            const actual = debug(msg);

            actual.should.be.equal(expected);
        });
    });
});