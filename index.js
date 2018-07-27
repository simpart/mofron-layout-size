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
            this.prmMap('width', 'height');
            this.prmOpt(po, p2);
            
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    contents (idx, tgt) {
        try {
            if (null !== this.width()) {
                tgt.width(this.width());
            }
            
            if (null !== this.height()) {
                tgt.height(this.height());
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    width (prm) {
        try {
            if (undefined === prm) {
                /* getter */
                return (undefined === this.m_width) ? null : this.m_width;
            }
            /* setter */
            if (('string' !== typeof prm) && ('number' !== typeof prm)) {
                throw new Error('invalid parameter');
            }
            this.m_width = prm;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    height (prm) {
        try {
            if (undefined === prm) {
                /* getter */
                return (undefined === this.m_height) ? null : this.m_height;
            }
            /* setter */
            if (('string' !== typeof prm) && ('number' !== typeof prm)) {
                throw new Error('invalid parameter');
            }
            this.m_height = prm;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.layout.Size;
/* end of file */
