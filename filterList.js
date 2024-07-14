function filter_list(l) {
  return l.filter(e => !(e === e.toString()))
}
