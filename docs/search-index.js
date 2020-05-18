var searchIndex={};
searchIndex["range_coder"] = {"doc":"This module is range_coder.","i":[[0,"alphabet_param","range_coder","アルファベットの頻度や累積頻度を保持する構造体",null,null],[3,"AlphabetParam","range_coder::alphabet_param","アルファベットの出現回数を示す構造体",null,null],[11,"new","","",0,[[],["self"]]],[11,"c","","",0,[[["self"]],["u32"]]],[11,"cum","","",0,[[["self"]],["u32"]]],[11,"set_c","","",0,[[["self"],["u32"]]]],[11,"set_cum","","",0,[[["self"],["u32"]]]],[0,"decoder","range_coder","デコーダ",null,null],[3,"Decoder","range_coder::decoder","デコーダ構造体",null,null],[11,"new","","",1,[[],["self"]]],[11,"set_data","","",1,[[["self"],["u8"],["vecdeque",["u8"]]]]],[11,"set_encoder","","",1,[[["self"],["encoder"]]]],[11,"decode_start","","デコード開始用の関数",1,[[["self"]]]],[11,"decode_one_alphabet","","一文字デコードする関数",1,[[["self"],["freqtable"]],["usize"]]],[0,"encoder","range_coder","エンコーダ",null,null],[3,"Encoder","range_coder::encoder","エンコーダ構造体",null,null],[11,"encode","","1アルファベット、エンコードを進める",2,[[["self"],["u32"],["alphabetparam"]],["u32"]]],[11,"finish","","エンコード終了後に呼び出して、 下限を出力",2,[[["self"]]]],[11,"new","","",2,[[],["self"]]],[11,"data","","",2,[[["self"]],["vecdeque"]]],[11,"set_range_coder","","レンジコーダを切り替える(?)",2,[[["self"],["rangecoder"]]]],[0,"freq_table","range_coder","頻度表",null,null],[3,"FreqTable","range_coder::freq_table","頻度表構造体",null,null],[11,"new","","",3,[[["usize"]],["self"]]],[11,"total_freq","","全アルファベットの頻度合計値",3,[[["self"]],["u32"]]],[11,"alphabet_params","","アルファベットリストを取得",3,[[["self"]]]],[11,"alphabet_param","","アルファベットのパラメータ(cとcum)を取得(imutable)",3,[[["usize"],["self"]],["alphabetparam"]]],[11,"alphabet_count","","アルファベットの種類数を取得",3,[[["self"]],["usize"]]],[11,"add_alphabet","","アルファベットを追加",3,[[["self"],["usize"]]]],[11,"finalize","","アルファベットの登録を終了",3,[[["self"]]]],[0,"range_coder","range_coder","レンジコーダ(基本ロジック)",null,null],[3,"RangeCoder","range_coder::range_coder","RangeCoder構造体",null,null],[11,"new","","コンストラクタ",4,[[],["self"]]],[11,"into_encoder","","エンコーダを作成",4,[[],["encoder"]]],[11,"into_decoder","","デコーダを作成",4,[[],["decoder"]]],[11,"range","","レンジのゲッタ",4,[[["self"]],["u64"]]],[11,"lower_bound","","下限のゲッタ",4,[[["self"]],["u64"]]],[11,"from","range_coder::alphabet_param","",0,[[["t"]],["t"]]],[11,"into","","",0,[[],["u"]]],[11,"to_owned","","",0,[[["self"]],["t"]]],[11,"clone_into","","",0,[[["t"],["self"]]]],[11,"try_from","","",0,[[["u"]],["result"]]],[11,"try_into","","",0,[[],["result"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"type_id","","",0,[[["self"]],["typeid"]]],[11,"from","range_coder::decoder","",1,[[["t"]],["t"]]],[11,"into","","",1,[[],["u"]]],[11,"try_from","","",1,[[["u"]],["result"]]],[11,"try_into","","",1,[[],["result"]]],[11,"borrow","","",1,[[["self"]],["t"]]],[11,"borrow_mut","","",1,[[["self"]],["t"]]],[11,"type_id","","",1,[[["self"]],["typeid"]]],[11,"from","range_coder::encoder","",2,[[["t"]],["t"]]],[11,"into","","",2,[[],["u"]]],[11,"try_from","","",2,[[["u"]],["result"]]],[11,"try_into","","",2,[[],["result"]]],[11,"borrow","","",2,[[["self"]],["t"]]],[11,"borrow_mut","","",2,[[["self"]],["t"]]],[11,"type_id","","",2,[[["self"]],["typeid"]]],[11,"from","range_coder::freq_table","",3,[[["t"]],["t"]]],[11,"into","","",3,[[],["u"]]],[11,"try_from","","",3,[[["u"]],["result"]]],[11,"try_into","","",3,[[],["result"]]],[11,"borrow","","",3,[[["self"]],["t"]]],[11,"borrow_mut","","",3,[[["self"]],["t"]]],[11,"type_id","","",3,[[["self"]],["typeid"]]],[11,"from","range_coder::range_coder","",4,[[["t"]],["t"]]],[11,"into","","",4,[[],["u"]]],[11,"try_from","","",4,[[["u"]],["result"]]],[11,"try_into","","",4,[[],["result"]]],[11,"borrow","","",4,[[["self"]],["t"]]],[11,"borrow_mut","","",4,[[["self"]],["t"]]],[11,"type_id","","",4,[[["self"]],["typeid"]]],[11,"clone","range_coder::alphabet_param","",0,[[["self"]],["alphabetparam"]]],[11,"fmt","","",0,[[["formatter"],["self"]],["result"]]]],"p":[[3,"AlphabetParam"],[3,"Decoder"],[3,"Encoder"],[3,"FreqTable"],[3,"RangeCoder"]]};
addSearchOptions(searchIndex);initSearch(searchIndex);