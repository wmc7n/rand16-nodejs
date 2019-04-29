module.exports = class rand16 {

  constructor(seed = 0x7645) {
    this.x = 0xD832
    this.y = seed
  }

  next() {
    const t = this.x ^ ( this.x << 9 );
    this.x = this.y;
    return this.y = (this.y^(this.y>>>5))^(t^(t>>>14));
  }

  range(min, max) {
		const a = Math.abs(this.next());
		const b = max + 1 - min;
		return min + a - Math.floor(a/b)*b;
  }

  shuffle = function(ary) {
    for(var i = ary.length - 1; i > 0; i--){
      const r = this.range(0,i);
      const tmp = ary[i];
      ary[i] = ary[r];
      ary[r] = tmp;
    }
    return ary;
  }

}
