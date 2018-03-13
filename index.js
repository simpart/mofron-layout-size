/**
 * @file mofron-layout-size/index.js
 * @author simpart
 */

/**
 * @class mofron.layout.Size
 * @brief layout class
 */
mofron.layout.Size = class extends mofron.Layout {
    
    constructor (x_po, y) {
        try {
            super();
            this.name('Size');
            this.prmOpt(x_po, y);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    layoutConts (idx, tgt) {
        try {
            tgt.size(
                this.param()[0],
                this.param()[1]
            );
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
            this.m_height = prm;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.layout.Size;
/* end of file */
