/**
 * @file mofron-layout-size/index.js
 * @author simpart
 */

/**
 * @class mofron.layout.Size
 * @brief layout class
 */
mofron.layout.Size = class extends mofron.Layout {
    
    constructor (po, p2) {
        try {
            super();
            this.name('Size');
            this.prmOpt(po, p2);
            
            this.getParam().check(
                (x) => {
                    try {
                        if (('string' !== typeof x) && ('number' !== typeof x)) {
                            throw new Error('invalid parameter');
                        }
                    } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
                },
                (y) => {
                    try {
                        if (('string' !== typeof y) && ('number' !== typeof y)) {
                            throw new Error('invalid parameter');
                        }
                    } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
                }
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    contents (idx, tgt) {
        try {
            tgt.size(
                this.value()[0],
                this.value()[1]
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.layout.Size;
/* end of file */
